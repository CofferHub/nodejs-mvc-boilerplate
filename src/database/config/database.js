export default () => {
	return {
		development: {
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE,
			host: process.env.DB_HOST,
			dialect: process.env.DB_DIALECT,
			operatorsAliases: 0,
			define: {
				timestamp: true,
				underscored: true
			},
			pool: {
				max: 5,
				min: 0,
				acquire: 30000,
				idle: 10000
			}
		},
		test: {
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE,
			host: process.env.DB_HOST,
			dialect: process.env.DB_DIALECT,
		},
		production: {
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE,
			host: process.env.DB_HOST,
			dialect: process.env.DB_DIALECT,
		}
	}
}
