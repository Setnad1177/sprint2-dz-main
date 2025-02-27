import {pureChange} from "./common/c10-SuperSort/SuperSort";

test("sortTest", () => {
    const up = '0' + 1
    const down = '1' + 1
    pureChange('down', up, down )
    const endState = pureChange('down', up, down )
    expect(endState).toEqual('11')
})
 export {}