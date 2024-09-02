const fs = require('node:fs')

const devPackagePaths = {
    "vscode-ext-gen": [
        `C:\\AppData\\code-vsextension\\vscode-ext-gen`,
        `G:\\code-vsextension\\vscode-ext-gen`
    ]
}
module.exports = {
    hooks: {
        readPackage: (/*** @type {PackageJson} */ pkg, context) => {

            Object.entries(devPackagePaths).forEach(([name, paths]) => {
                paths.forEach(path => {
                    if (fs.existsSync(path)) {
                        const locationProtocol = `file:${path}`
                        if (pkg.dependencies?.[name]) {
                            pkg.dependencies[name] = locationProtocol
                            context.log(`package '${name}' of dependencies redirect to ${locationProtocol}`)
                        }
                        if (pkg.devDependencies?.[name]) {
                            pkg.devDependencies[name] = locationProtocol
                            context.log(`package '${name}' of devDependencies redirect to ${locationProtocol}`)
                        }
                        if (pkg.peerDependencies?.[name]) {
                            pkg.peerDependencies[name] = locationProtocol
                            context.log(`package '${name}' of peerDependencies redirect to ${locationProtocol}`)
                        }
                        if (pkg.optionalDependencies?.[name]) {
                            pkg.optionalDependencies[name] = locationProtocol
                            context.log(`package '${name}' of optionalDependencies redirect to ${locationProtocol}`)
                        }
                        if (pkg.bundleDependencies?.[name]) {
                            pkg.bundleDependencies[name] = locationProtocol
                            context.log(`package '${name}' of bundleDependencies redirect to ${locationProtocol}`)
                        }
                    }
                });
            });
            return pkg;
        }
    }
};