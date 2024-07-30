interface DIDResolutionResult {
    did: string;
    document: object |null;
    error?: string;
}

async function resolveExampleA(did: string): Promise<DIDResolutionResult> {
    return {did, document: {message: "Resolved by Example-A method"}};    
}

async function resolveExampleB(did: string): Promise<DIDResolutionResult>{ 
    return {did, document: {message: "Resolved by Example-B method"}};
}

export async function resolveDID(did: string): Promise<DIDResolutionResult> {
    const method = did.split(':')[1];

    switch (method) {
        case 'example-a':
            return resolveExampleA(did);
        case 'example-b':
            return resolveExampleB(did);
        default:
            return {did, document: null, error: "Unsupported did method"};
            }
    }