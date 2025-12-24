# Configuração do IDE - VS Code

Este diretório contém configurações específicas do VS Code para o projeto TypeORM.

## 📁 Arquivos de Configuração

### `settings.json`
Configurações do workspace que incluem:
- Formatação automática com Prettier
- Organização automática de imports
- Configurações específicas para TypeScript/JavaScript
- Configurações de arquivos e editor

### `extensions.json`
Extensões recomendadas para o projeto:
- **Prettier** - Formatação de código
- **TypeScript** - Suporte ao TypeScript
- **ESLint** - Linting de código
- **Path IntelliSense** - Autocompletar caminhos
- E outras extensões úteis

### `tasks.json`
Tarefas personalizadas disponíveis:
- **Prettier: Format All Files** - Formata todos os arquivos
- **Prettier: Format Source Files** - Formata apenas arquivos da pasta src/
- **Prettier: Check Formatting** - Verifica formatação
- **TypeORM: Run Migrations** - Executa migrações
- **Start Development Server** - Inicia servidor de desenvolvimento

### `launch.json`
Configurações de debug:
- **Debug TypeORM App** - Debug da aplicação principal
- **Debug Current TypeScript File** - Debug do arquivo atual
- **Attach to Process** - Anexar a processo existente

### `keybindings.json`
Atalhos de teclado personalizados:
- `Ctrl+Shift+F` - Formatar documento
- `Ctrl+Alt+F` - Executar formatação de todos os arquivos
- `Ctrl+Shift+O` - Organizar imports

### `typescript.code-snippets`
Snippets personalizados para TypeScript:
- `typeorm-entity` - Criar entidade TypeORM
- `express-controller` - Criar controller Express
- `typeorm-migration` - Criar migração TypeORM
- `express-route` - Criar rota Express

## 🚀 Como Usar

### 1. Instalar Extensões Recomendadas
Quando você abrir o projeto no VS Code, será solicitado a instalar as extensões recomendadas.

### 2. Atalhos de Teclado
Use os atalhos configurados para formatação rápida:
- `Ctrl+Shift+F` para formatar o arquivo atual
- `Ctrl+Alt+F` para formatar todos os arquivos

### 3. Tarefas
Acesse as tarefas através do Command Palette (`Ctrl+Shift+P`) e digite "Tasks: Run Task".

### 4. Debug
Use `F5` para iniciar o debug ou configure breakpoints no código.

### 5. Snippets
Digite os prefixos dos snippets para inserir código pré-definido:
- `typeorm-entity` + Tab
- `express-controller` + Tab
- `typeorm-migration` + Tab

## ⚙️ Configurações Importantes

- **Formatação automática**: Ativada ao salvar
- **Organização de imports**: Automática ao salvar
- **Detecção de indentação**: Desabilitada (usa configuração do Prettier)
- **Trim trailing whitespace**: Ativado
- **Final newline**: Automático

## 🔧 Personalização

Para personalizar as configurações, edite os arquivos correspondentes neste diretório. As configurações se aplicam apenas a este workspace.
