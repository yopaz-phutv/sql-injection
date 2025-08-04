import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.jsx"],
            refresh: true,
        }),
        tailwindcss(),
        react(),
    ],
    // server: {
    //     host: "0.0.0.0",
    //     port: 5173,
    //     https: {
    //         key: fs.readFileSync("/etc/nginx/certs/sqli.comm-key.pem"),
    //         cert: fs.readFileSync("/etc/nginx/certs/sqli.comm.pem"),
    //     },
    //     origin: "https://sqli.comm:5173",
    //     cors: true,
    // },
});
