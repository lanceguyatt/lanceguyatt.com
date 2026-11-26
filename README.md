# Lance Guyatt - Web Developer

[![Deploy to Surge](https://img.shields.io/badge/Deploy-Surge-ff5a5f?style=for-the-badge)](https://surge.sh/)
[![License: UNLICENSED](https://img.shields.io/badge/License-UNLICENSED-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/UNLICENSED)

Welcome to my personal website and portfolio. This project showcases my work, blog posts, and professional information in a fast, accessible, and maintainable way.

## 🚀 Features

- ⚡ Blazing fast performance with Astro
- 🎨 Modern UI with Tailwind CSS
- ✨ Interactive components with Alpine.js
- 📝 Content management with MDX
- 🔍 SEO optimized
- 📱 Fully responsive design

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Interactivity**: [Alpine.js](https://alpinejs.dev/)
- **Icons**: [astro-icon](https://github.com/natemoo-re/astro-icon)
- **Deployment**: [Surge](https://surge.sh/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/lanceguyatt.com.git
   cd lanceguyatt.com
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```
   The site will be available at `http://localhost:4321`

## 🏗️ Building for Production

```bash
# Build the project
pnpm build

# Preview the production build locally
pnpm preview

# Deploy to Surge
pnpm surge
```

## 🧪 Development

```bash
# Run type checking
pnpm check

# Run Oxlint (Vite+)
pnpm lint

# Format code
pnpm format

# Run tests (Vitest)
pnpm test
```

## 📂 Project Structure

```
src/
├── assets/              # Static assets
├── components/          # General site UI
├── content/             # Content: pages and work (MDX), about, nav and tags (YAML)
├── features/            # Self-contained modules (guruMeditation, kickstart, work)
├── gadgets/             # Amiga-style UI primitives (Window, Requester, Close, …)
├── icons/               # SVG icons for astro-icon
├── layouts/             # Base and Workbench layouts
├── lib/                 # Helpers (tv and cn for Tailwind classes)
├── pages/               # Routes
├── schema/              # Zod schemas for the content collections
├── scripts/             # Alpine entrypoint and shared client scripts
├── styles/              # Tailwind theme and Workbench styles
├── types/               # Type shims for the Alpine plugins
├── config.ts            # Site, social and person metadata
├── content.config.ts    # Content collection definitions
└── types.ts             # Shared types
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is [UNLICENSED](LICENSE).

## 📬 Contact

- Website: [lanceguyatt.com](https://lanceguyatt.com)
- Email: [lance@lanceguyatt.com](mailto:lance@lanceguyatt.com)

---

Built with ❤️ by [Lance Guyatt](https://github.com/lanceguyatt)
