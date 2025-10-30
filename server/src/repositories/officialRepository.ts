import fs from 'fs';
import { Arg } from 'type-graphql';
import { OfficialType, OfficialInputType } from '../models/officialType.js';

const officialData = './src/data/official_db.json';

function readFile(fileName: string): Promise<string> {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

export const getOfficials = async () => {
    return JSON.parse(await readFile(officialData));
};

export const getOfficial = async (id: string): Promise<OfficialType | null> => {
    const officials = await getOfficials();
    return officials.find((official: OfficialType) => official.id === id) || null;
};
export const addOfficial = async (official: OfficialInputType) => {
    const officials = await getOfficials();
    officials.push(new OfficialInputType(official));
    fs.writeFileSync(officialData, JSON.stringify(officials, null, 2));
    return official;
};

export const updateOfficial = async (id: string, updatedOfficial: OfficialInputType) => {
    const officials = await getOfficials();
    const index = officials.findIndex((official: { id: string }) => official.id === id);
    if (index !== -1) {
        officials[index] = { ...officials[index], ...updatedOfficial };
        fs.writeFileSync(officialData, JSON.stringify(officials, null, 2));
        return officials[index];
    }
    return null;
}

export const deleteOfficial = async (id: string) => {
    const officials = await getOfficials();
    const index = officials.findIndex((official: { id: string }) => official.id === id);
    if (index !== -1) {
        const deletedOfficial = officials.splice(index, 1)[0];
        fs.writeFileSync(officialData, JSON.stringify(officials, null, 2));
        return deletedOfficial;
    }
    return null;
}
