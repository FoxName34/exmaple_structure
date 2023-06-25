function checkDependencies(fileContents: string | string[], dependencies: string[], fileExtension: any, skipList: string[] = [], moduleName: string) {
    const individualDependencies: string[] = dependencies
        .flatMap((item: string) => item.split(',').map((d: string) => d.trim()));
    
    for (const dependency of individualDependencies) {
        if (skipList.includes(dependency)) {
            continue;
        }
    }

    const importStatement = `import ${dependencies} from '${moduleName}'`;
    if (!fileContents.includes(importStatement)) {
        throw new Error(`Missing ${importStatement} import from a ${fileExtension} file`);
    }
}

export function checkLibraryDependencies(fileContents: string | string[], library: any, fileExtension: any, moduleName: string) {
    let dependencies: string[];
    const skipList: string[]  = ['', ''];
    switch (library) {
        case "react-router-dom":
            dependencies = [
            "{ Route",
            "{ Routes",
            ];
            break;
        case "react-redux":
            dependencies = [
            "connect(",
            "useSelector(",
            "useDispatch(",
            ];
            break;
        case "axios":
            dependencies = [
            "axios.",
            ];
            break;
        case "lodash":
            dependencies = [
            "lodash.",
            ];
            break;
        default:
        dependencies = [];
    }

    checkDependencies(fileContents, dependencies, fileExtension, skipList, moduleName);
}