import { exec } from 'child_process';

const commitMessage = process.argv.slice(2).join(' ')

    exec('git add .', async (error, stdout): Promise<void> => {
    let output = (error || stdout) as string | string[];
    console.log(output);
});

exec(`git commit -m "${commitMessage}"`, async (error, stdout): Promise<void> => {
    let output = (error || stdout) as string | string[];
    console.log(output);
});

if (process.env.DEV = "true") {

    exec(`git push origin HEAD:dev`, async (error, stdout): Promise<void> => {
        let output = (error || stdout) as string | string[];
        console.log(output);
    });
    
} else {

    exec(`git push`, async (error, stdout): Promise<void> => {
        let output = (error || stdout) as string | string[];
        console.log(output);
    });

}

console.log('Git Add, Commit and Push Done!')

if (process.env.DEV = "true") {

    console.log('Pushed to Dev Branch')

} else {

    console.log('Pushed to Main Branch')

}
