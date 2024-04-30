process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdout.on('line', () => {
  const input = process.stdin.read();
  if (input) {
    process.stdout.write(`Your name is: ${input}`);
    process.exit(0);
  }
});

process.stdin.on('close', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit(0);
});
