# ComposeWizard

ComposeWizard is a Node.js script that helps you create a `docker-compose.yml` file based on predefined templates. It simplifies the process of generating Docker Compose files by allowing you to select a template and customize it through a guided prompt.

---

## Features
- Interactive CLI for selecting templates and providing project details.
- Supports multiple Docker Compose templates with placeholders for customization.
- Automatically generates a `docker-compose.yml` file in a new project folder.

---

## Prerequisites

To use this project, ensure you have the following installed:

1. **Node.js**: Download and install from [Node.js official website](https://nodejs.org/).
2. Install the required npm packages using:
   ```bash
   npm install inquirer fs-extra
   ```

---

## Directory Structure
The directory structure for the project is as follows:

```
project/
├── templates/
│   ├── template1.yml
│   └── template2.yml
└── script.js
```
- **templates/**: Folder containing Docker Compose templates with placeholders.
- **script.js**: The main script for generating the `docker-compose.yml` file.

---

## How to Use

1. **Add Templates:**
   Place your Docker Compose templates inside the `templates/` folder. Ensure the templates include placeholders `{{PROJECT_NAME}}` and `{{PORT}}` for customization.

2. **Run the Script:**
   Execute the script using the following command:
   ```bash
   node script.js
   ```

3. **Follow Prompts:**
   The script will prompt you to:
   - Select a Docker Compose template from the `templates/` folder.
   - Enter a project name.
   - Provide a port number.

4. **Output:**
   A new folder named after your project will be created, containing the customized `docker-compose.yml` file.

---

## Example Template

Here’s an example of a template file (`templates/template1.yml`):

```yaml
version: '3.8'

services:
  {{PROJECT_NAME}}:
    image: your-docker-image
    ports:
      - "{{PORT}}:80"
```

---

## MongoDB Template

Here’s an example of a MongoDB template file (`templates/mongodb.yml`):

```yaml
version: '3.8'

services:
  {{PROJECT_NAME}}:
    image: mongo
    ports:
      - "{{PORT}}:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
```

---

## Sample Workflow

1. **Start the Script:**
   ```bash
   node script.js
   ```
2. **Select a Template:**
   ```
   ? Select a Docker template: (Use arrow keys)
     portainer.yml
     netdata.yml
     pihole.yml
   ```
3. **Enter Project Details:**
   ```
   ? Enter the project name: my-docker-project
   ? Enter the port number: 8080
   ```
4. **Output Folder:**
   A new folder `my-docker-project/` will be created, containing the following:
   ```
   my-docker-project/
   └── docker-compose.yml
   ```

   Example `docker-compose.yml`:
   ```yaml
   version: '3.8'

   services:
     my-docker-project:
       image: your-docker-image
       ports:
         - "8080:80"
   ```

---

## Extending the Script
This script can be extended for additional customizations:
- Add more placeholders to the templates for further personalization.
- Implement more advanced validation for user inputs.
- Support additional file formats or configurations.

---

## License
This project is open-source and available under the [MIT License](LICENSE).

