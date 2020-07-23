import {expect, test} from '@oclif/test'

describe('eth:accounts', () => {
  test
  .stdout()
  .command(['eth:accounts'])
  .it('runs start', ctx => {
    expect(ctx.stdout).to.contain('start commands')
  })

  test
  .stdout()
  .command(['eth:accounts', '--name', 'besu'])
  .it('runs start --name besu', ctx => {
    expect(ctx.stdout).to.contain('start besu')
  })
})
