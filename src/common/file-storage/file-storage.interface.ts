export interface IFileStorage {
    saveFile(key: string, file: NodeJS.ReadableStream): Promise<boolean>;
    getFile(key: string): Promise<NodeJS.ReadableStream>
}