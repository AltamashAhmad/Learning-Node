import { argv } from 'node:process';
import {fileOrganizer} from './utils/organizer.js';

const input = argv[2];

fileOrganizer(input);