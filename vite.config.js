import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		{
			test: /\.js$/,
			use: 'babel-loader',
		},
	],
	resolve: {
		extensions: ['.js', '.vue'],
		// 경로 별칭
		alias: {
			'~': path.resolve(__dirname, './src'),
			assets: path.resolve(__dirname, './src/assets'),
		},
	},
});
