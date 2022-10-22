oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g show
$ show COMMAND
running command...
$ show (--version)
show/0.0.0 darwin-arm64 node-v16.14.2
$ show --help [COMMAND]
USAGE
  $ show COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`show hello PERSON`](#show-hello-person)
* [`show hello world`](#show-hello-world)
* [`show help [COMMAND]`](#show-help-command)
* [`show plugins`](#show-plugins)
* [`show plugins:install PLUGIN...`](#show-pluginsinstall-plugin)
* [`show plugins:inspect PLUGIN...`](#show-pluginsinspect-plugin)
* [`show plugins:install PLUGIN...`](#show-pluginsinstall-plugin-1)
* [`show plugins:link PLUGIN`](#show-pluginslink-plugin)
* [`show plugins:uninstall PLUGIN...`](#show-pluginsuninstall-plugin)
* [`show plugins:uninstall PLUGIN...`](#show-pluginsuninstall-plugin-1)
* [`show plugins:uninstall PLUGIN...`](#show-pluginsuninstall-plugin-2)
* [`show plugins update`](#show-plugins-update)

## `show hello PERSON`

Say hello

```
USAGE
  $ show hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/humzaa-omar/embedded-caddy-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `show hello world`

Say hello world

```
USAGE
  $ show hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `show help [COMMAND]`

Display help for show.

```
USAGE
  $ show help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for show.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `show plugins`

List installed plugins.

```
USAGE
  $ show plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ show plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `show plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ show plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ show plugins add

EXAMPLES
  $ show plugins:install myplugin 

  $ show plugins:install https://github.com/someuser/someplugin

  $ show plugins:install someuser/someplugin
```

## `show plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ show plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ show plugins:inspect myplugin
```

## `show plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ show plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ show plugins add

EXAMPLES
  $ show plugins:install myplugin 

  $ show plugins:install https://github.com/someuser/someplugin

  $ show plugins:install someuser/someplugin
```

## `show plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ show plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ show plugins:link myplugin
```

## `show plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ show plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ show plugins unlink
  $ show plugins remove
```

## `show plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ show plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ show plugins unlink
  $ show plugins remove
```

## `show plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ show plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ show plugins unlink
  $ show plugins remove
```

## `show plugins update`

Update installed plugins.

```
USAGE
  $ show plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
