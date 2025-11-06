-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Block" (
    "version" INTEGER NOT NULL DEFAULT 0,
    "order" INTEGER NOT NULL DEFAULT 1,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "id" TEXT NOT NULL PRIMARY KEY,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "tenantId" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "projectId" TEXT NOT NULL,
    CONSTRAINT "Block_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Block" ("createAt", "deletedAt", "description", "id", "isActive", "isDeleted", "order", "projectId", "slug", "tenantId", "title", "updateAt", "version") SELECT "createAt", "deletedAt", "description", "id", "isActive", "isDeleted", "order", "projectId", "slug", "tenantId", "title", "updateAt", "version" FROM "Block";
DROP TABLE "Block";
ALTER TABLE "new_Block" RENAME TO "Block";
CREATE UNIQUE INDEX "Block_slug_version_key" ON "Block"("slug", "version");
CREATE TABLE "new_Project" (
    "title" TEXT NOT NULL,
    "description" TEXT,
    "state" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "tags" TEXT,
    "id" TEXT NOT NULL PRIMARY KEY,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "tenantId" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Project" ("createAt", "deletedAt", "description", "id", "isActive", "isDeleted", "slug", "state", "tags", "tenantId", "title", "updateAt", "version") SELECT "createAt", "deletedAt", "description", "id", "isActive", "isDeleted", "slug", "state", "tags", "tenantId", "title", "updateAt", "version" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE UNIQUE INDEX "Project_slug_version_key" ON "Project"("slug", "version");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
