module.exports = {
  apps: [
    {
      name: "app",
      cwd: "/root/app",
      script: "npm",
      args: "run start -- --port 3000",
      env: {
        NODE_ENV: "production",
	INTERNAL_API_KEY: "ps_key_4c8f7b1a2d9e0f6c5b3a8e7d4f1c9b6a0e5d2c8f9b1a7e6"
      }
    }
  ]
};
