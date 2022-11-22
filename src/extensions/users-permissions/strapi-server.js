module.exports = (plugin) => {
  plugin.controllers.user.updateMe = async (ctx) => {
    ctx.params.id = ctx.state.user.id;
    return await plugin.controllers.user.update(ctx);
  }

  plugin.routes['content-api'].routes.push({
    method: 'PUT',
    path: '/users/me',
    handler: 'user.updateMe',
    config: {
      prefix: ''
    }
  });

  return plugin;
}
