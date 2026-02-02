import React, { useState } from 'react';
import { ChevronDown, ExternalLink, Check, ArrowRight } from 'lucide-react';

export default function SetupGuide() {
  const [language, setLanguage] = useState('en');
  const [expandedSteps, setExpandedSteps] = useState({});

  const translations = {
    en: {
      title: "Setup Guide",
      subtitle: "Build Your Dev Environment",
      description: "Everything you need to start coding. Step by step.",
      tools: [
        {
          id: 1,
          name: "VS Code",
          icon: "📝",
          website: "code.visualstudio.com",
          description: "Your code editor",
          steps: [
            "Go to https://code.visualstudio.com",
            "Click the big download button for your OS (Windows, Mac, or Linux)",
            "Run the downloaded installer (.exe or .dmg)",
            "Follow the installation wizard",
            "Once installed, open VS Code",
            "You're ready to write code"
          ]
        },
        {
          id: 2,
          name: "Node.js",
          icon: "⚙️",
          website: "nodejs.org",
          description: "JavaScript runtime",
          steps: [
            "Go to https://nodejs.org",
            "Download the LTS (Long Term Support) version",
            "Run the installer and follow the setup",
            "Open Terminal/Command Prompt",
            "Type: node --version",
            "If you see a version number, you're good!"
          ]
        },
        {
          id: 3,
          name: "Git",
          icon: "🔗",
          website: "git-scm.com",
          description: "Version control system",
          steps: [
            "Go to https://git-scm.com",
            "Click download for your OS",
            "Run the installer with default settings",
            "Open Terminal/Command Prompt",
            "Type: git --version",
            "Version number means success"
          ]
        },
        {
          id: 4,
          name: "GitHub",
          icon: "🐙",
          website: "github.com",
          description: "Store your code online",
          steps: [
            "Go to https://github.com",
            "Click Sign Up",
            "Enter your email and create a username",
            "Create a strong password",
            "Verify your email",
            "Your account is ready"
          ]
        },
        {
          id: 5,
          name: "Vercel",
          icon: "▲",
          website: "vercel.com",
          description: "Deploy to the internet",
          steps: [
            "Go to https://vercel.com",
            "Click Sign Up",
            "Choose Continue with GitHub",
            "Authorize Vercel",
            "Complete your profile",
            "Ready to deploy"
          ]
        },
        {
          id: 6,
          name: "React",
          icon: "⚛️",
          website: "react.dev",
          description: "Build user interfaces",
          steps: [
            "Make sure Node.js is installed first",
            "Open Terminal in your project folder",
            "Type: npx create-react-app my-app",
            "Wait for installation (takes a few minutes)",
            "Navigate: cd my-app",
            "Start: npm start",
            "Your React app opens in the browser"
          ]
        },
        {
          id: 7,
          name: "React Router",
          icon: "🛣️",
          website: "reactrouter.com",
          description: "Multi-page navigation",
          steps: [
            "Make sure React is installed",
            "Open Terminal in your project folder",
            "Type: npm install react-router-dom",
            "Wait for installation",
            "Import Router components in App.jsx",
            "Use BrowserRouter, Routes, and Route",
            "Create navigation between pages"
          ]
        },
        {
          id: 8,
          name: "npm (Package Manager)",
          icon: "📦",
          website: "npmjs.com",
          description: "Install and manage packages",
          steps: [
            "npm comes automatically with Node.js",
            "No separate installation needed",
            "Open Terminal/Command Prompt",
            "Type: npm --version",
            "You'll see the version number if it's installed",
            "npm is your package manager for installing libraries",
            "Use: npm install [package-name] to add libraries"
          ]
        },
        {
          id: 9,
          name: "Terminal/Command Prompt",
          icon: "💻",
          website: "en.wikipedia.org/wiki/Command-line_interface",
          description: "Command line interface",
          steps: [
            "Windows: Search for 'Command Prompt' or 'PowerShell'",
            "Mac: Open 'Terminal' from Applications > Utilities",
            "Linux: Open your distribution's terminal application",
            "This is where you type commands to run your code",
            "Example: node --version, npm start, git clone",
            "Don't be scared! It's just typing commands",
            "Press Enter to execute commands"
          ]
        },
        {
          id: 10,
          name: "Web Browser",
          icon: "🌐",
          website: "google.com/chrome",
          description: "View your running apps",
          steps: [
            "Use any modern browser: Chrome, Firefox, Safari, Edge",
            "Chrome is recommended for developer tools",
            "Open Developer Tools: Press F12 or Right-click > Inspect",
            "Use the Console to see errors and messages",
            "Use the Elements tab to inspect HTML and CSS",
            "Use the Network tab to see what's loading",
            "This is how you debug your code"
          ]
        },
        {
          id: 11,
          name: "Create React App (CRA)",
          icon: "⚛️",
          website: "create-react-app.dev",
          description: "Scaffold a new React project",
          steps: [
            "Make sure Node.js and npm are installed",
            "Open Terminal in the folder where you want your project",
            "Type: npx create-react-app my-project",
            "This downloads and runs the setup wizard",
            "It creates a folder with all files you need",
            "Navigate into it: cd my-project",
            "Start it: npm start"
          ]
        },
        {
          id: 12,
          name: "Code Extensions (VS Code)",
          icon: "🧩",
          website: "marketplace.visualstudio.com",
          description: "Enhance your editor with tools",
          steps: [
            "Open VS Code and look for Extensions (left sidebar)",
            "Search for 'ES7+ React/Redux/React-Native snippets'",
            "Install 'Prettier' for code formatting",
            "Install 'ESLint' for catching errors",
            "Install 'Thunder Client' or 'REST Client' for APIs",
            "Install 'Tailwind CSS IntelliSense' if using Tailwind",
            "These extensions make coding much faster and easier"
          ]
        }
      ]
    },
    fr: {
      title: "Guide de Configuration",
      subtitle: "Construisez Votre Environnement",
      description: "Tout ce dont vous avez besoin pour commencer. Étape par étape.",
      tools: [
        {
          id: 1,
          name: "VS Code",
          icon: "📝",
          website: "code.visualstudio.com",
          description: "Votre éditeur de code",
          steps: [
            "Allez sur https://code.visualstudio.com",
            "Cliquez sur le bouton de téléchargement pour votre OS",
            "Exécutez le programme d'installation (.exe ou .dmg)",
            "Suivez l'assistant d'installation",
            "Une fois installé, ouvrez VS Code",
            "Vous êtes prêt à coder"
          ]
        },
        {
          id: 2,
          name: "Node.js",
          icon: "⚙️",
          website: "nodejs.org",
          description: "Environnement d'exécution JavaScript",
          steps: [
            "Allez sur https://nodejs.org",
            "Téléchargez la version LTS",
            "Exécutez le programme d'installation",
            "Ouvrez Terminal/Invite de commande",
            "Tapez: node --version",
            "Si vous voyez une version, c'est bon!"
          ]
        },
        {
          id: 3,
          name: "Git",
          icon: "🔗",
          website: "git-scm.com",
          description: "Système de contrôle de version",
          steps: [
            "Allez sur https://git-scm.com",
            "Cliquez sur télécharger pour votre OS",
            "Exécutez le programme d'installation",
            "Ouvrez Terminal/Invite de commande",
            "Tapez: git --version",
            "Le numéro de version = succès"
          ]
        },
        {
          id: 4,
          name: "GitHub",
          icon: "🐙",
          website: "github.com",
          description: "Stockez votre code en ligne",
          steps: [
            "Allez sur https://github.com",
            "Cliquez sur S'inscrire",
            "Entrez votre email et créez un nom d'utilisateur",
            "Créez un mot de passe fort",
            "Vérifiez votre email",
            "Votre compte est prêt"
          ]
        },
        {
          id: 5,
          name: "Vercel",
          icon: "▲",
          website: "vercel.com",
          description: "Déployez sur Internet",
          steps: [
            "Allez sur https://vercel.com",
            "Cliquez sur S'inscrire",
            "Choisissez Continuer avec GitHub",
            "Autorisez Vercel",
            "Complétez votre profil",
            "Prêt à déployer"
          ]
        },
        {
          id: 6,
          name: "React",
          icon: "⚛️",
          website: "react.dev",
          description: "Construisez des interfaces",
          steps: [
            "Assurez-vous que Node.js est installé d'abord",
            "Ouvrez Terminal dans votre dossier de projet",
            "Tapez: npx create-react-app my-app",
            "Attendez l'installation (quelques minutes)",
            "Naviguez: cd my-app",
            "Démarrez: npm start",
            "Votre application React s'ouvre"
          ]
        },
        {
          id: 7,
          name: "React Router",
          icon: "🛣️",
          website: "reactrouter.com",
          description: "Navigation multi-pages",
          steps: [
            "Assurez-vous que React est installé",
            "Ouvrez Terminal dans votre dossier de projet",
            "Tapez: npm install react-router-dom",
            "Attendez l'installation",
            "Importez les composants Router dans App.jsx",
            "Utilisez BrowserRouter, Routes et Route",
            "Créez une navigation entre les pages"
          ]
        },
        {
          id: 8,
          name: "npm (Gestionnaire de Packages)",
          icon: "📦",
          website: "npmjs.com",
          description: "Installer et gérer les packages",
          steps: [
            "npm vient automatiquement avec Node.js",
            "Pas d'installation séparée nécessaire",
            "Ouvrez Terminal/Invite de commande",
            "Tapez: npm --version",
            "Vous verrez le numéro de version s'il est installé",
            "npm est votre gestionnaire de packages",
            "Utilisez: npm install [nom-du-package] pour ajouter des bibliothèques"
          ]
        },
        {
          id: 9,
          name: "Terminal/Invite de Commande",
          icon: "💻",
          website: "en.wikipedia.org/wiki/Command-line_interface",
          description: "Interface en ligne de commande",
          steps: [
            "Windows: Recherchez 'Invite de commande' ou 'PowerShell'",
            "Mac: Ouvrez 'Terminal' depuis Applications > Utilitaires",
            "Linux: Ouvrez le terminal de votre distribution",
            "C'est ici que vous tapez des commandes",
            "Exemple: node --version, npm start, git clone",
            "N'ayez pas peur! C'est juste taper des commandes",
            "Appuyez sur Entrée pour exécuter les commandes"
          ]
        },
        {
          id: 10,
          name: "Navigateur Web",
          icon: "🌐",
          website: "google.com/chrome",
          description: "Voir vos applications en cours d'exécution",
          steps: [
            "Utilisez n'importe quel navigateur moderne: Chrome, Firefox, Safari, Edge",
            "Chrome est recommandé pour les outils de développement",
            "Ouvrez Outils de développement: Appuyez sur F12 ou Clic droit > Inspecter",
            "Utilisez la Console pour voir les erreurs",
            "Utilisez l'onglet Éléments pour inspecter HTML et CSS",
            "Utilisez l'onglet Réseau pour voir ce qui se charge",
            "C'est comme ça que vous déboguez votre code"
          ]
        },
        {
          id: 11,
          name: "Create React App (CRA)",
          icon: "⚛️",
          website: "create-react-app.dev",
          description: "Créer un nouveau projet React",
          steps: [
            "Assurez-vous que Node.js et npm sont installés",
            "Ouvrez Terminal dans le dossier où vous voulez votre projet",
            "Tapez: npx create-react-app mon-projet",
            "Cela télécharge et exécute l'assistant de configuration",
            "Il crée un dossier avec tous les fichiers dont vous avez besoin",
            "Naviguez dedans: cd mon-projet",
            "Démarrez-le: npm start"
          ]
        },
        {
          id: 12,
          name: "Extensions VS Code",
          icon: "🧩",
          website: "marketplace.visualstudio.com",
          description: "Améliorer votre éditeur avec des outils",
          steps: [
            "Ouvrez VS Code et cherchez Extensions (barre latérale gauche)",
            "Recherchez 'ES7+ React/Redux/React-Native snippets'",
            "Installez 'Prettier' pour formater le code",
            "Installez 'ESLint' pour détecter les erreurs",
            "Installez 'Thunder Client' ou 'REST Client' pour les API",
            "Installez 'Tailwind CSS IntelliSense' si vous utilisez Tailwind",
            "Ces extensions rendent la programmation beaucoup plus rapide"
          ]
        }
      ]
    },
    ar: {
      title: "دليل الإعداد",
      subtitle: "بناء بيئة التطوير الخاصة بك",
      description: "كل ما تحتاجه للبدء. خطوة خطوة.",
      tools: [
        {
          id: 1,
          name: "VS Code",
          icon: "📝",
          website: "code.visualstudio.com",
          description: "محرر الأكواد الخاص بك",
          steps: [
            "اذهب إلى https://code.visualstudio.com",
            "انقر على زر التحميل لنظام التشغيل الخاص بك",
            "قم بتشغيل برنامج التثبيت",
            "اتبع معالج التثبيت",
            "بعد التثبيت، افتح VS Code",
            "أنت جاهز للبرمجة"
          ]
        },
        {
          id: 2,
          name: "Node.js",
          icon: "⚙️",
          website: "nodejs.org",
          description: "بيئة تشغيل JavaScript",
          steps: [
            "اذهب إلى https://nodejs.org",
            "حمّل نسخة LTS",
            "قم بتشغيل برنامج التثبيت",
            "افتح جهاز الطرفية",
            "اكتب: node --version",
            "إذا رأيت رقم نسخة، فأنت بخير!"
          ]
        },
        {
          id: 3,
          name: "Git",
          icon: "🔗",
          website: "git-scm.com",
          description: "نظام التحكم في الإصدار",
          steps: [
            "اذهب إلى https://git-scm.com",
            "انقر على التحميل لنظام التشغيل الخاص بك",
            "قم بتشغيل برنامج التثبيت",
            "افتح جهاز الطرفية",
            "اكتب: git --version",
            "رقم الإصدار = النجاح"
          ]
        },
        {
          id: 4,
          name: "GitHub",
          icon: "🐙",
          website: "github.com",
          description: "خزّن أكوادك عبر الإنترنت",
          steps: [
            "اذهب إلى https://github.com",
            "انقر على التسجيل",
            "أدخل بريدك الإلكتروني وأنشئ اسم مستخدم",
            "أنشئ كلمة مرور قوية",
            "تحقق من بريدك الإلكتروني",
            "حسابك جاهز"
          ]
        },
        {
          id: 5,
          name: "Vercel",
          icon: "▲",
          website: "vercel.com",
          description: "انشر على الإنترنت",
          steps: [
            "اذهب إلى https://vercel.com",
            "انقر على التسجيل",
            "اختر الاستمرار مع GitHub",
            "صرح لـ Vercel",
            "أكمل ملفك الشخصي",
            "جاهز للنشر"
          ]
        },
        {
          id: 6,
          name: "React",
          icon: "⚛️",
          website: "react.dev",
          description: "بناء الواجهات",
          steps: [
            "تأكد من تثبيت Node.js أولاً",
            "افتح جهاز الطرفية في مجلد مشروعك",
            "اكتب: npx create-react-app my-app",
            "انتظر التثبيت (بضع دقائق)",
            "انتقل: cd my-app",
            "ابدأ: npm start",
            "يفتح تطبيق React الخاص بك"
          ]
        },
        {
          id: 7,
          name: "React Router",
          icon: "🛣️",
          website: "reactrouter.com",
          description: "ملاحة متعددة الصفحات",
          steps: [
            "تأكد من تثبيت React",
            "افتح جهاز الطرفية في مجلد مشروعك",
            "اكتب: npm install react-router-dom",
            "انتظر التثبيت",
            "استورد مكونات Router في App.jsx",
            "استخدم BrowserRouter و Routes و Route",
            "أنشئ ملاحة بين الصفحات"
          ]
        },
        {
          id: 8,
          name: "npm (مدير الحزم)",
          icon: "📦",
          website: "npmjs.com",
          description: "تثبيت وإدارة الحزم",
          steps: [
            "npm يأتي تلقائياً مع Node.js",
            "لا توجد حاجة لتثبيت منفصل",
            "افتح جهاز الطرفية",
            "اكتب: npm --version",
            "ستظهر نسخة إذا تم تثبيتها",
            "npm هو مدير الحزم الخاص بك",
            "استخدم: npm install [اسم-الحزمة] لإضافة المكتبات"
          ]
        },
        {
          id: 9,
          name: "جهاز الطرفية/موجه الأوامر",
          icon: "💻",
          website: "en.wikipedia.org/wiki/Command-line_interface",
          description: "واجهة سطر الأوامر",
          steps: [
            "Windows: ابحث عن 'موجه الأوامر' أو 'PowerShell'",
            "Mac: افتح 'Terminal' من Applications > Utilities",
            "Linux: افتح جهاز الطرفية في التوزيع الخاص بك",
            "هنا حيث تكتب الأوامر لتشغيل الكود",
            "مثال: node --version, npm start, git clone",
            "لا تخافوا! إنه فقط كتابة الأوامر",
            "اضغط Enter لتنفيذ الأوامر"
          ]
        },
        {
          id: 10,
          name: "متصفح الويب",
          icon: "🌐",
          website: "google.com/chrome",
          description: "عرض تطبيقاتك قيد التشغيل",
          steps: [
            "استخدم أي متصفح حديث: Chrome أو Firefox أو Safari أو Edge",
            "يُنصح بـ Chrome لأدوات المطورين",
            "افتح أدوات المطورين: اضغط F12 أو انقر بزر الماوس الأيمن > فحص",
            "استخدم وحدة التحكم لرؤية الأخطاء",
            "استخدم علامة التبويب العناصر لفحص HTML و CSS",
            "استخدم علامة التبويب الشبكة لرؤية ما يتم تحميله",
            "هذا هو كيفية تصحيح أخطاء الكود"
          ]
        },
        {
          id: 11,
          name: "Create React App (CRA)",
          icon: "⚛️",
          website: "create-react-app.dev",
          description: "إنشاء مشروع React جديد",
          steps: [
            "تأكد من تثبيت Node.js و npm",
            "افتح جهاز الطرفية في المجلد الذي تريد مشروعك",
            "اكتب: npx create-react-app my-project",
            "هذا ينزل وينفذ معالج الإعداد",
            "ينشئ مجلداً بجميع الملفات التي تحتاجها",
            "انتقل إليه: cd my-project",
            "شغّله: npm start"
          ]
        },
        {
          id: 12,
          name: "امتدادات VS Code",
          icon: "🧩",
          website: "marketplace.visualstudio.com",
          description: "تحسين محررك بالأدوات",
          steps: [
            "افتح VS Code وابحث عن الامتدادات (الشريط الجانبي الأيسر)",
            "ابحث عن 'ES7+ React/Redux/React-Native snippets'",
            "ثبت 'Prettier' لتنسيق الأكواد",
            "ثبت 'ESLint' لاكتشاف الأخطاء",
            "ثبت 'Thunder Client' أو 'REST Client' للـ API",
            "ثبت 'Tailwind CSS IntelliSense' إذا كنت تستخدم Tailwind",
            "هذه الامتدادات تجعل البرمجة أسرع وأسهل"
          ]
        }
      ]
    }
  };

  const content = translations[language];

  const toggleStep = (toolId) => {
    setExpandedSteps(prev => ({
      ...prev,
      [toolId]: !prev[toolId]
    }));
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Fredoka:wght@600;700&family=JetBrains+Mono:wght@400;600&display=swap');

        :root {
          --bg-main: #0f0a1a;
          --bg-secondary: #1a1428;
          --accent-neon: #ff006e;
          --accent-cyan: #00f5ff;
          --accent-volt: #b700ff;
          --accent-lime: #39ff14;
          --text-primary: #ffffff;
          --text-secondary: #a0a8c0;
          --shadow-glow: 0 0 40px rgba(255, 0, 110, 0.3);
          --shadow-cyan: 0 0 30px rgba(0, 245, 255, 0.2);
        }

        body {
          background: linear-gradient(135deg, var(--bg-main) 0%, var(--bg-secondary) 100%);
          color: var(--text-primary);
          font-family: 'Fredoka', sans-serif;
          line-height: 1.6;
          overflow-x: hidden;
          position: relative;
        }

        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(255, 0, 110, 0.05) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(0, 245, 255, 0.05) 0%, transparent 50%);
          pointer-events: none;
          z-index: -1;
        }

        /* ===== HEADER ===== */
        header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(15, 10, 26, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 2px solid rgba(255, 0, 110, 0.2);
          padding: 1rem 2rem;
          box-shadow: 0 8px 32px rgba(255, 0, 110, 0.1);
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--accent-neon), var(--accent-volt));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: bold;
          box-shadow: var(--shadow-glow);
          animation: pulse-glow 3s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: var(--shadow-glow); }
          50% { box-shadow: 0 0 60px rgba(255, 0, 110, 0.5); }
        }

        .logo-text {
          font-family: 'Space Mono', monospace;
          font-size: 18px;
          font-weight: 700;
          background: linear-gradient(90deg, var(--accent-neon), var(--accent-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 2px;
        }

        .lang-selector {
          display: flex;
          gap: 0.25rem;
          background: rgba(26, 20, 40, 0.8);
          padding: 0.3rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 0, 110, 0.2);
        }

        .lang-btn {
          padding: 0.4rem 0.7rem;
          border: none;
          background: transparent;
          color: var(--text-secondary);
          font-family: 'Space Mono', monospace;
          font-weight: 700;
          font-size: 11px;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .lang-btn:hover {
          color: var(--text-primary);
        }

        .lang-btn.active {
          background: linear-gradient(90deg, var(--accent-neon), var(--accent-volt));
          color: white;
          box-shadow: 0 0 15px rgba(255, 0, 110, 0.4);
        }

        /* ===== HERO ===== */
        .hero {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem 3rem;
          text-align: center;
          position: relative;
        }

        .hero::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 400px;
          background: radial-gradient(circle at 30% 40%, rgba(255, 0, 110, 0.2) 0%, transparent 50%);
          filter: blur(100px);
          pointer-events: none;
        }

        .hero-title {
          font-family: 'Space Mono', monospace;
          font-size: clamp(2.5rem, 7vw, 4rem);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 0.5rem;
          background: linear-gradient(90deg, var(--accent-neon), var(--accent-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeInDown 0.8s ease;
          letter-spacing: -1px;
          position: relative;
          z-index: 1;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
          font-weight: 400;
          letter-spacing: 0.5px;
          animation: fadeInUp 0.8s ease 0.1s both;
          position: relative;
          z-index: 1;
        }

        .hero-desc {
          font-size: 0.95rem;
          color: var(--accent-cyan);
          max-width: 600px;
          margin: 0 auto 2rem;
          animation: fadeInUp 0.8s ease 0.2s both;
          position: relative;
          z-index: 1;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ===== TOOLS GRID ===== */
        .tools-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem 4rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.25rem;
        }

        .tool-card {
          background: linear-gradient(135deg, rgba(255, 0, 110, 0.05), rgba(0, 245, 255, 0.05));
          border: 2px solid rgba(255, 0, 110, 0.3);
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: slideUp 0.6s ease;
          position: relative;
        }

        .tool-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 0, 110, 0.1), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tool-card:hover {
          border-color: var(--accent-neon);
          background: linear-gradient(135deg, rgba(255, 0, 110, 0.15), rgba(0, 245, 255, 0.1));
          transform: translateY(-12px);
          box-shadow: 0 20px 50px rgba(255, 0, 110, 0.3), 0 0 40px rgba(0, 245, 255, 0.2);
        }

        .tool-card.expanded {
          border-color: var(--accent-cyan);
          background: linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(0, 245, 255, 0.15));
        }

        .tool-header {
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          background: transparent;
          border: none;
          cursor: pointer;
          width: 100%;
          gap: 1rem;
        }

        .tool-left {
          flex: 1;
          text-align: left;
        }

        .tool-icon {
          font-size: 2.2rem;
          margin-bottom: 0.75rem;
          display: block;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .tool-name {
          font-family: 'Space Mono', monospace;
          font-size: 1.3rem;
          font-weight: 700;
          background: linear-gradient(90deg, var(--accent-neon), var(--accent-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.4rem;
          letter-spacing: 0.5px;
        }

        .tool-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .tool-website {
          font-size: 0.7rem;
          color: var(--accent-cyan);
          margin-top: 0.6rem;
          opacity: 0.8;
          font-family: 'Space Mono', monospace;
        }

        .chevron {
          width: 24px;
          height: 24px;
          color: var(--accent-neon);
          flex-shrink: 0;
          margin-top: 0.3rem;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .tool-card.expanded .chevron {
          transform: rotate(180deg);
          color: var(--accent-cyan);
        }

        /* ===== STEPS ===== */
        .tool-steps {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-top: 2px solid rgba(255, 0, 110, 0.2);
        }

        .tool-card.expanded .tool-steps {
          max-height: 1500px;
        }

        .steps-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: rgba(0, 0, 0, 0.3);
        }

        .step {
          display: flex;
          gap: 1rem;
          animation: slideIn 0.5s ease;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .step-number {
          width: 36px;
          height: 36px;
          min-width: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-neon), var(--accent-volt));
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 0.85rem;
          box-shadow: 0 0 15px rgba(255, 0, 110, 0.5);
        }

        .step-text {
          font-size: 0.9rem;
          color: var(--text-primary);
          line-height: 1.6;
          padding-top: 0.3rem;
          font-family: 'Fredoka', sans-serif;
        }

        .step-link {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          margin-top: 1rem;
          padding: 0.7rem 1.4rem;
          background: linear-gradient(90deg, var(--accent-neon), var(--accent-volt));
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 0 20px rgba(255, 0, 110, 0.4);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .step-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 30px rgba(255, 0, 110, 0.6), 0 10px 30px rgba(255, 0, 110, 0.2);
        }

        /* ===== COMPLETION ===== */
        .completion {
          max-width: 1200px;
          margin: 3rem auto 0;
          padding: 2.5rem;
          background: linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(0, 245, 255, 0.05));
          border: 2px solid var(--accent-neon);
          border-radius: 16px;
          display: flex;
          gap: 1.5rem;
          box-shadow: 0 0 40px rgba(255, 0, 110, 0.2);
        }

        .completion-icon {
          width: 56px;
          height: 56px;
          min-width: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-neon), var(--accent-volt));
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 0 30px rgba(255, 0, 110, 0.5);
          animation: pulse-icon 2s ease-in-out infinite;
        }

        @keyframes pulse-icon {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .completion-content h3 {
          font-family: 'Space Mono', monospace;
          font-size: 1.4rem;
          background: linear-gradient(90deg, var(--accent-neon), var(--accent-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.8rem;
          letter-spacing: 1px;
        }

        .completion-content p {
          color: var(--text-secondary);
          margin-bottom: 0.8rem;
          line-height: 1.8;
          font-size: 0.95rem;
        }

        .completion-ready {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--accent-neon);
          font-weight: 700;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* ===== FOOTER ===== */
        footer {
          border-top: 2px solid rgba(255, 0, 110, 0.2);
          background: rgba(15, 10, 26, 0.8);
          padding: 1.5rem;
          text-align: center;
          color: var(--text-secondary);
          margin-top: 3rem;
          backdrop-filter: blur(10px);
        }

        footer p {
          font-size: 0.85rem;
          font-family: 'Space Mono', monospace;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          header {
            padding: 0.75rem 1.5rem;
          }

          .header-content {
            flex-direction: row;
            gap: 0.5rem;
          }

          .logo {
            width: 36px;
            height: 36px;
            font-size: 18px;
          }

          .logo-text {
            font-size: 14px;
            letter-spacing: 1px;
          }

          .lang-selector {
            gap: 0.2rem;
            padding: 0.2rem;
          }

          .lang-btn {
            padding: 0.35rem 0.6rem;
            font-size: 10px;
            letter-spacing: 0.5px;
          }

          .tools-container {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .tool-header {
            padding: 1.2rem;
          }

          .tool-icon {
            font-size: 1.8rem;
            margin-bottom: 0.5rem;
          }

          .tool-name {
            font-size: 1.1rem;
          }

          .completion {
            flex-direction: column;
            text-align: center;
            padding: 1.5rem;
          }

          .completion-icon {
            margin: 0 auto;
          }

          .hero {
            padding: 2rem 1.5rem 1.5rem;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 0.9rem;
          }

          .hero-desc {
            font-size: 0.8rem;
          }
        }
      `}</style>

      <header>
        <div className="header-content">
          <div className="header-left">
            <div className="logo">⚡</div>
            <div className="logo-text">{content.title}</div>
          </div>
          <div className="lang-selector">
            {['en', 'fr', 'ar'].map(lang => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`lang-btn ${language === lang ? 'active' : ''}`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="hero">
        <h1 className="hero-title">{content.subtitle}</h1>
        <p className="hero-subtitle">{content.description}</p>
      </div>

      <div className="tools-container">
        {content.tools.map(tool => (
          <div
            key={tool.id}
            className={`tool-card ${expandedSteps[tool.id] ? 'expanded' : ''}`}
          >
            <button
              className="tool-header"
              onClick={() => toggleStep(tool.id)}
            >
              <div className="tool-left">
                <span className="tool-icon">{tool.icon}</span>
                <h3 className="tool-name">{tool.name}</h3>
                <p className="tool-desc">{tool.description}</p>
                <p className="tool-website">📍 {tool.website}</p>
              </div>
              <ChevronDown className="chevron" />
            </button>

            <div className="tool-steps">
              <div className="steps-content">
                {tool.steps.map((step, idx) => (
                  <div key={idx} className="step">
                    <div className="step-number">{idx + 1}</div>
                    <div>
                      <p className="step-text">{step}</p>
                    </div>
                  </div>
                ))}
                <a
                  href={`https://${tool.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="step-link"
                >
                  <ExternalLink size={18} />
                  {language === 'en' ? 'Visit Website' : language === 'fr' ? 'Visiter le Site' : 'زيارة الموقع'}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="completion">
          <div className="completion-icon">
            <Check size={32} />
          </div>
          <div className="completion-content">
            <h3>{language === 'en' ? 'All Set!' : language === 'fr' ? 'Tout est Prêt!' : 'كل شيء جاهز!'}</h3>
            <p>
              {language === 'en'
                ? "You now have everything needed: VS Code for coding, Node.js for JavaScript, Git for version control, GitHub to store your code, Vercel to deploy online, React to build interfaces, and React Router for navigation."
                : language === 'fr'
                ? "Vous avez maintenant tout ce qu'il faut: VS Code pour coder, Node.js pour JavaScript, Git pour le contrôle de version, GitHub pour stocker votre code, Vercel pour déployer, React pour construire des interfaces, et React Router pour la navigation."
                : "لديك الآن كل ما تحتاجه: VS Code للبرمجة، Node.js لـ JavaScript، Git للتحكم في الإصدار، GitHub لتخزين أكوادك، Vercel للنشر، React لبناء الواجهات، و React Router للملاحة."}
            </p>
            <div className="completion-ready">
              <ArrowRight size={20} />
              {language === 'en'
                ? "You're ready to start coding!"
                : language === 'fr'
                ? "Vous êtes prêt à commencer!"
                : "أنت جاهز لبدء البرمجة!"}
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>
          {language === 'en'
            ? '© 2026 Setup Guide • Everything ready? Start coding! 🚀'
            : language === 'fr'
            ? '© 2026 Guide de Configuration • Tout prêt? Commencez à coder! 🚀'
            : '© 2026 دليل الإعداد • كل شيء جاهز؟ ابدأ البرمجة! 🚀'}
        </p>
      </footer>
    </>
  );
}