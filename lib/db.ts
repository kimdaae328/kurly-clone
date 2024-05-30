import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

// db.sMSToken.
async function test() {
    const token = await db.sMSToken.create({
        data: {
            token:"121212",
            user: {
                connect: {
                    id: 3
                },
            },
        },
    });
    console.log(token)
}

test()

export default db;