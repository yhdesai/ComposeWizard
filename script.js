const inquirer = require("inquirer");
const fs = require("fs-extra");
const path = require("path");

(async () => {
  try {
    // Get templates from the templates folder
    const templatesDir = path.join(__dirname, "templates");
    const templateFiles = await fs.readdir(templatesDir);

    if (templateFiles.length === 0) {
      console.log("No templates found in the templates folder.");
      return;
    }

    // Ask user for details
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "template",
        message: "Select a Docker template:",
        choices: templateFiles,
      },
      {
        type: "input",
        name: "projectName",
        message: "Enter the project name:",
        validate: (input) =>
          input.trim() ? true : "Project name cannot be empty.",
      },
      {
        type: "input",
        name: "port",
        message: "Enter the port number:",
        validate: (input) =>
          /^\d+$/.test(input) ? true : "Please enter a valid port number.",
      },
    ]);

    const { template, projectName, port } = answers;

    // Read the selected template file
    const templateContent = await fs.readFile(
      path.join(templatesDir, template),
      "utf-8"
    );

    // Replace placeholders with user-provided values
    const updatedContent = templateContent
      .replace(/{{PROJECT_NAME}}/g, projectName)
      .replace(/{{PORT}}/g, port);

    // Create a new folder for the project
    const projectDir = path.join(__dirname, projectName);
    await fs.ensureDir(projectDir);

    // Write the updated content to docker-compose.yml
    const outputFilePath = path.join(projectDir, "docker-compose.yml");
    await fs.writeFile(outputFilePath, updatedContent);

    console.log(`Docker Compose file created at ${outputFilePath}`);
  } catch (error) {
    console.error("Error:", error);
  }
})();
