import { expect } from 'chai'
import concatName from '../../src/utils/concatName'

describe('concatName', function () {
  it('should return name with dashes', function () {
    expect(concatName('Perfected Gear')).to.equal('Perfected-Gear')
    expect(concatName('Reinforced Blade Ver.1')).to.equal('Reinforced-Blade-Ver.1')
  })
  it('should return the same if no spaces found', function () {
    expect(concatName('Omen')).to.equal('Omen')
  })
})
