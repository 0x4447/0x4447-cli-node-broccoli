# 🥦 Broccoli

If you're a developer with a local Nginx setup for the purpose of delivering local web pages with custom local domain names to mimic a real world scenario, you've definitely experienced the tedious work involved in creating Nginx config files: copy and paste a template, change the new file, save the file, reload the Nginx configuration file, and restart the server.

In this day and age, doing this with dozens of micro servers is truly a pain.

We decided to streamline the process and make our lives a bit simpler by creating this small CLI that automates everything.

We hope you'll find Broccoli as useful as we do.

# How to install

```
] sudo npm install -g @0x4447/broccoli
```

# How to use

```
] sudo broccoli
```

# Where to get help

```
] broccoli -h
```

# What to expect

Follow the instructions on the screen. The app will do the following for you:

- Ask the right questions ;)
- Create a config file
- Save the config file to the Nginx directory
- Restart Nginx

We hope you'll find this app useful. Don't forget to check the source code. We took the time to write easy-to-understand code that allows you to extend or customize the app to fit your needs.

# Companion Software

This CLI tool also works well with the following software:

- [Hot Pepper](https://www.npmjs.com/package/@0x4447/hotpepper): Set up SystemD as the process manager for your NodeJS server with one simple command.

# The End

If you enjoyed this project, please consider giving it a 🌟. And check out our [0x4447 GitHub account](https://github.com/0x4447), which contains additional resources you might find useful or interesting.

## Sponsor 🎊

This project is brought to you by 0x4447 LLC, a software company specializing in building custom solutions on top of AWS. Follow this link to learn more: https://0x4447.com. Alternatively, send an email to [hello@0x4447.email](mailto:hello@0x4447.email?Subject=Hello%20From%20Repo&Body=Hi%2C%0A%0AMy%20name%20is%20NAME%2C%20and%20I%27d%20like%20to%20get%20in%20touch%20with%20someone%20at%200x4447.%0A%0AI%27d%20like%20to%20discuss%20the%20following%20topics%3A%0A%0A-%20LIST_OF_TOPICS_TO_DISCUSS%0A%0ASome%20useful%20information%3A%0A%0A-%20My%20full%20name%20is%3A%20FIRST_NAME%20LAST_NAME%0A-%20My%20time%20zone%20is%3A%20TIME_ZONE%0A-%20My%20working%20hours%20are%20from%3A%20TIME%20till%20TIME%0A-%20My%20company%20name%20is%3A%20COMPANY%20NAME%0A-%20My%20company%20website%20is%3A%20https%3A%2F%2F%0A%0ABest%20regards.).
