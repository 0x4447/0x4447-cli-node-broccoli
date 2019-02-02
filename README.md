# 🥦 Broccoli

If you are a developer with a local Nginx setup, to deliver local web pages with custom local domain names to mimic a real world scenario, then for sure you experienced the tedious work of creating Nginx config files: copy an paste a template, change the new file, save it, reload the Nginx configuration file and and restart the server itself.

Doing this in todays day and age where we get dozens of micro servers is truly a pain.

To stream line this process, we decided to make our life bit simpler by creating this small CLI to automate this tedious process.

We hope you'll find Broccoli useful as we do.

# How to Install

```
] sudo npm install -g @0x4447/broccoli
```

# How to Use

```
] sudo broccoli
```

# Where to get Help

```
] broccoli -h
```

# What to Expect

Follow the instructions on the screen. The app will do the following for you:

- Ask the right questions ;)
- Create a config file
- Save it in to the Nginx directory
- Restart Nginx

We hope you'll find this app useful, and don't forget to check the source code. We took the time to write simple to understand code, so you can extend or customize the app to fit your needs.

# Companion Software

This CLI tools works well also with the following software:

- [Hot Pepper](https://www.npmjs.com/package/@0x4447/hotpepper): Setup SystemD as the process manager for your NodeJS server with one simple command.

# The End

If you enjoyed this project, please consider giving it a 🌟. And check out our [0x4447 GitHub account](https://github.com/0x4447), where you'll find additional resources you might find useful or interesting.

## Sponsor 🎊

This project is brought to you by 0x4447 LLC, a software company specializing in building custom solutions on top of AWS. Follow this link to learn more: https://0x4447.com. Alternatively, send an email to [hello@0x4447.email](mailto:hello@0x4447.email?Subject=Hello%20From%20Repo&Body=Hi%2C%0A%0AMy%20name%20is%20NAME%2C%20and%20I%27d%20like%20to%20get%20in%20touch%20with%20someone%20at%200x4447.%0A%0AI%27d%20like%20to%20discuss%20the%20following%20topics%3A%0A%0A-%20LIST_OF_TOPICS_TO_DISCUSS%0A%0ASome%20useful%20information%3A%0A%0A-%20My%20full%20name%20is%3A%20FIRST_NAME%20LAST_NAME%0A-%20My%20time%20zone%20is%3A%20TIME_ZONE%0A-%20My%20working%20hours%20are%20from%3A%20TIME%20till%20TIME%0A-%20My%20company%20name%20is%3A%20COMPANY%20NAME%0A-%20My%20company%20website%20is%3A%20https%3A%2F%2F%0A%0ABest%20regards.).
