function AlphanumericID(length: number): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    const values = new Uint8Array(length);

    crypto.getRandomValues(values);

    for (let i = 0; i < length; i++) {
        id += charset[values[i] % charset.length];
    }

    return id;
    }
