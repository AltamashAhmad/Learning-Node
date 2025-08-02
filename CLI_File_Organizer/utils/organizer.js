import fs from 'fs';
import path from 'path';
import { fileTypeMap } from './fileTypes.js';

function fileOrganizer(input) {
    fs.readdir(input, (err, files) => {
        try {
            const Organized = input + '/Organized';

            if (files.length === 0) {
                console.log('No files found');
                return;
            } else if (!fs.existsSync(Organized)) {
                fs.mkdirSync(Organized);
            }

            console.log("Organizing your files, please wait...");

            files.forEach((file) => {
                const extension = path.extname(file);
                let folderName = 'Others';

                for (const [type, extensions] of Object.entries(fileTypeMap)) {
                    if (extensions.includes(extension)) {
                        folderName = type;
                        break;
                    }
                }

                const targetDir = `${Organized}/${folderName}`;
                if (!fs.existsSync(targetDir)) {
                    fs.mkdirSync(targetDir);
                }

                fs.renameSync(`${input}/${file}`, `${targetDir}/${file}`);
            });

            console.log('Your files are organized');
        } catch (error) {
            console.log("Please enter a valid directory");
            console.log(error);
        }
    });
}

export { fileOrganizer };