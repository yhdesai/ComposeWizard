# ComposeWizard

ComposeWizard is a CLI tool designed to make Docker Compose file creation fun and effortless. With an intuitive interface, you can select from predefined templates, customize details like project name and port, and generate a `docker-compose.yml` file in a matter of seconds. Say goodbye to manual YAML editing and let ComposeWizard handle it for you!

---

## Features

- **Template-Based**: Choose from a variety of pre-configured Docker Compose templates.
- **Interactive CLI**: Simple prompts to gather project details.
- **Dynamic Generation**: Automatically replaces placeholders in templates with user-provided values.
- **Organized Output**: Creates a new project folder with your custom `docker-compose.yml`.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yhdesai/ComposeWizard.git
   cd ComposeWizard

2. Install dependencies:

npm install




---

Usage

1. Place your Docker Compose templates in the templates/ folder. Use placeholders like {{PROJECT_NAME}} and {{PORT}} in the template files for dynamic replacement.
Example template (templates/template1.yml):

version: '3.8'

services:
  {{PROJECT_NAME}}:
    image: your-docker-image
    ports:
      - "{{PORT}}:80"


2. Run the tool:

node script.js


3. Follow the prompts:

Select a template.

Enter your project name.

Enter the port number.



4. Find your generated docker-compose.yml in the newly created project folder:

./<project-name>/docker-compose.yml




---

Example

Input:

Template: template1.yml

Project Name: my-app

Port: 8080


Output:

Generated docker-compose.yml:

version: '3.8'

services:
  my-app:
    image: your-docker-image
    ports:
      - "8080:80"


---

Contributing

Contributions are welcome! If you have ideas for new features or improvements, feel free to open an issue or submit a pull request.


---

License

This project is licensed under the MIT License.
