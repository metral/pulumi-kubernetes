import * as k8sClient from "@kubernetes/client-node";

// Wait for the CRD to be established.
// Use the k8s JS client (https://github.com/kubernetes-client/javascript)
// to retrieve resource created by the operator as a workaround for:
// https://github.com/pulumi/pulumi-kubernetes/issues/1056
export async function checkCrdStatus(client: k8sClient.ApiextensionsV1Api): Promise<boolean> {
    for (let i = 0; i < 20; i++){
        try {
            const crd = await client.readCustomResourceDefinition("servicemonitors.monitoring.coreos.com");
            let conditions = crd?.body?.status?.conditions;
            if (conditions) {
                for (let c of conditions) {
                    if (c.type == "Established" && c.status == "True") {
                        console.log("ServiceMonitor CRD is ready");
                        return true;
                    }
                }
            }
            break;
        } catch(e) {
            console.log(`Waiting for ServiceMonitor CRD to be ready (${i+1})`)
            await new Promise(resolve => setTimeout(resolve, 3 * 1000));
        }
    }
    return false;
}
