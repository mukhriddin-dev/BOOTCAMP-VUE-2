1. Tailwindcss.com 
2. CDN > head 
3. npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init --full

4. taliwind.config.js ->   content: ["./src/**/*.{html,js}"],

5. main.css -> @tailwind base;
               @tailwind components;
               @tailwind utilities;

6. npx tailwindcss -i ./src/main.css -o ./dist/output.css --watch
