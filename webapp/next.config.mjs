/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
		config.cache = {
			type: 'filesystem',
			maxMemoryGenerations: 2, // Default is 1
		};
		return config;
	},
};

export default nextConfig;
