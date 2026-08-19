---
title: "Installing Laravel"
category: "Laravel"
date: "2026-08-19"
---

# **How To Install Laravel**

Before creating your first Laravel application, make sure that your local machine has PHP, Composer, and the Laravel installer installed. In addition, you should install either Node and NPM or Bun so that you can compile your application's frontend assets.

If you don't have PHP and Composer installed on your local machine, the following commands will install PHP, Composer, and the Laravel installer on macOS, Windows, or Linux:

### **macOS**
```bash
/bin/bash -c "$(curl -fsSL [https://php.new/install/mac/8.5](https://php.new/install/mac/8.5))"
```

### **windows**
```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('[https://php.new/install/windows](https://php.new/install/windows)'))
```

### **linux**
```bash
/bin/bash -c "$(curl -fsSL [https://php.new/install/linux/8.5](https://php.new/install/linux/8.5))"
```

After running one of the commands above, you should restart your terminal session. To update PHP, Composer, and the Laravel installer after installing them via php.new, you can re-run the command in your terminal.

If you already have PHP and Composer installed, you may install the Laravel installer via Composer:

```Bash
composer global require laravel/installer
```
For a fully-featured, graphical PHP installation and management experience, check out Laravel Herd.

Creating an Application
After you have installed PHP, Composer, and the Laravel installer, you are ready to create a new Laravel application:

```Bash
laravel new example-app
```

Once the application has been created, you can start Laravel's local development server, queue worker, and Vite development server using the dev Composer script:

```Bash
cd example-app
npm install && npm run build
composer run dev
```
Once you have started the development server, you can access your application in your web browser at **http://localhost:8000**. Next, you're ready to start taking your next steps into the Laravel ecosystem. Of course, you may also want to configure a database and run the necessary migrations.