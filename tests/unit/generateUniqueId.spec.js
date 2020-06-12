const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique Id', () => {
  it('should generate an unique ID', ()=>{
    const uniqueId = generateUniqueId();
    
    expect(uniqueId).toHaveLength(8);
  })
})