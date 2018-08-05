'use strict';

import * as vscode from 'vscode';

import container from './inversify.config';
import TYPES from './types';
import { CommandsManager } from './commands/commands-manager';

export function activate(context: vscode.ExtensionContext) {
    const cmdManager = container.get<CommandsManager>(TYPES.CommandManager);
    cmdManager.registerCommands(context);
}

export function deactivate() {
}
