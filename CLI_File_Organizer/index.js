import { argv } from 'node:process';
import fs from 'fs';
import path from 'path';

const input = argv[2];

fs.readdir(input, (err, files) => {
    try {
        const Organized = input + '/Organized';
        if(files.length === 0) {
            console.log('No files found');
            return;
        }
        else if (!fs.existsSync(Organized)) {
            fs.mkdirSync(Organized);
        }
        console.log("organizing your files, plese wait..."); 
        files.forEach((file) => {

            const extension = path.extname(file);
            if (extension=== '.mp4') {
                if(!fs.existsSync(Organized + '/' + 'Videos')) {
                    fs.mkdirSync(Organized + '/' + 'Videos');
                }
                fs.renameSync(input + '/' + file, Organized + '/' + 'Videos' + '/' + file);
            }
            else if (extension === '.jpg' || extension === '.png' || extension === '.jpeg') {
                if(!fs.existsSync(Organized + '/' + 'Images')) {
                    fs.mkdirSync(Organized + '/' + 'Images');
                }
                fs.renameSync(input + '/' + file, Organized + '/' + 'Images' + '/' + file);
            }
            else if (extension === '.pdf' || extension === '.doc' || extension === '.docx') {
                if(!fs.existsSync(Organized + '/' + 'PDFs')) {
                    fs.mkdirSync(Organized + '/' + 'PDFs');
                }
                fs.renameSync(input + '/' + file, Organized + '/' + 'PDFs' + '/' + file);
            }
            else if (extension === '.txt') {
                if(!fs.existsSync(Organized + '/' + 'Texts')) {
                    fs.mkdirSync(Organized + '/' + 'Texts');
                }
                fs.renameSync(input + '/' + file, Organized + '/' + 'Texts' + '/' + file);
            }
            else if (extension === '.zip' || extension === '.rar'){
                if(!fs.existsSync(Organized + '/' + 'Zips')) {
                    fs.mkdirSync(Organized + '/' + 'Zips');
                }
                fs.renameSync(input + '/' + file, Organized + '/' + 'Zips' + '/' + file);
            }
        });

        console.log('Your files are organized');
    } catch (error) {
        console.log("please enter a valid directory");
        console.log(error);
    }
});

