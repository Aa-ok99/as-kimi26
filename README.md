# as-kimi26

Kimi 2.6 Multi-Agent Launcher for Termux - AI-powered coding assistant with Ollama integration.

## Project Structure

```
as-kimi26/
├── bin/
│   └── as-kimi26              # CLI launcher (executable)
├── lib/
│   ├── core/
│   │   ├── launcher.js        # Main launcher engine
│   │   ├── agent-orchestrator.js  # Multi-agent orchestration
│   │   ├── termux-adapter.js  # Termux-specific integrations
│   │   └── ollama-client.js   # Ollama API client
│   ├── agents/
│   │   ├── code-architect.js  # 코딩/프로젝트 생성
│   │   ├── security-auditor.js
│   │   ├── data-guardian.js
│   │   └── performance-engineer.js
│   ├── tools/
│   │   ├── web-search.js      # 🌏 Web search tool
│   │   ├── file-manager.js    # 파일 관리
│   │   ├── git-helpers.js     # Git automation
│   │   ├── code-analyzer.js   # 코드 분석
│   │   └── android-tools.js   # Android-specific tools
│   ├── ui/
│   │   ├── terminal-ui.js     # TUI (Terminal User Interface)
│   │   ├── dashboard.js       # Live monitoring dashboard
│   │   └── colors.js          # Termux color schemes
│   └── utils/
│       ├── config.js          # Configuration manager
│       ├── logger.js          # Logging system
│       └── helpers.js         # Utility functions
├── skills/
│   ├── web-development.md     # Skill: Web dev
│   ├── mobile-app.md          # Skill: Mobile apps
│   ├── api-design.md          # Skill: API design
│   └── termux-setup.md        # Skill: Termux environment
├── templates/
│   ├── node-project/          # Template: Node.js project
│   ├── react-app/             # Template: React app
│   ├── python-script/         # Template: Python script
│   └── termux-tool/           # Template: Termux tool
├── docs/
│   ├── README.md
│   ├── INSTALL.md             # Termux 설치 가이드
│   └── API.md
├── package.json
└── .as-kimi26rc               # Default config
```

## Quick Start

```bash
npm start
```

## Development

```bash
# Run tests
npm test

# Setup project
npm run setup
```