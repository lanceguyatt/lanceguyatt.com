// Builds Storybook into dist/storybook/ after the site build, served at /storybook/
export const onPostBuild = async ({ constants, utils }) => {
  try {
    await utils.run('pnpm', [
      'build-storybook',
      '--quiet',
      '-o',
      `${constants.PUBLISH_DIR}/storybook`,
    ])
  } catch (error) {
    utils.build.failBuild('Storybook build failed', { error })
  }
}
