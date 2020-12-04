const middleware = {}

middleware['resetBreadscrumbs'] = require('../middleware/resetBreadscrumbs.js')
middleware['resetBreadscrumbs'] = middleware['resetBreadscrumbs'].default || middleware['resetBreadscrumbs']

export default middleware
