import exp from "constants";
import { resolveDID } from "../src/didResolver";

describe('DID Resolver Tests', () => {
    test('Resolve DID example-a', async()=> {
        const result = await resolveDID('did:example-a:123');
        expect(result.document).toBeDefined();
        expect(result.error).toBeUndefined();
        expect(result.document).toEqual({message: "Resolved by Example-A method"});
    });

    test('Resolve DID example-b', async()=> {
        const result = await resolveDID('did:example-b:456');
        expect(result.document).toBeDefined();
        expect(result.error).toBeUndefined();
        expect(result.document).toEqual({message: "Resolved by Example-B method"});
    });

    test('Resolve DID example-a', async()=> {
        const result = await resolveDID('did:example-z:789');
        expect(result.document).toBeNull();
        expect(result.error).toBeDefined();
        expect(result.error).toEqual("Unsupported did method");
    });
});