import {expect, test} from '@oclif/test'

describe('freight', () => {
  test
  .stdout()
  .command(['freight'])
  .it('runs freight', ctx => {
    expect(ctx.stdout).to.contain('Go Yankees')
  })

  test
  .stdout()
  .command(['freight', '--name', 'trust'])
  .it('runs freight --name trust', ctx => {
    expect(ctx.stdout).to.contain('Go Yankees')
  })
})
