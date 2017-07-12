// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Topic extends lumi.NamedResource implements TopicArgs {
    public readonly autoDeleteOnIdle?: string;
    public readonly defaultMessageTtl?: string;
    public readonly duplicateDetectionHistoryTimeWindow?: string;
    public readonly enableBatchedOperations?: boolean;
    public readonly enableExpress?: boolean;
    public readonly enableFilteringMessagesBeforePublishing?: boolean;
    public readonly enablePartitioning?: boolean;
    public readonly location: string;
    public readonly maxSizeInMegabytes?: number;
    public readonly _name: string;
    public readonly namespaceName: string;
    public readonly requiresDuplicateDetection?: boolean;
    public readonly resourceGroupName: string;
    public readonly supportOrdering?: boolean;

    constructor(name: string, args: TopicArgs) {
        super(name);
        this.autoDeleteOnIdle = args.autoDeleteOnIdle;
        this.defaultMessageTtl = args.defaultMessageTtl;
        this.duplicateDetectionHistoryTimeWindow = args.duplicateDetectionHistoryTimeWindow;
        this.enableBatchedOperations = args.enableBatchedOperations;
        this.enableExpress = args.enableExpress;
        this.enableFilteringMessagesBeforePublishing = args.enableFilteringMessagesBeforePublishing;
        this.enablePartitioning = args.enablePartitioning;
        this.location = args.location;
        this.maxSizeInMegabytes = args.maxSizeInMegabytes;
        this._name = args._name;
        this.namespaceName = args.namespaceName;
        this.requiresDuplicateDetection = args.requiresDuplicateDetection;
        this.resourceGroupName = args.resourceGroupName;
        this.supportOrdering = args.supportOrdering;
    }
}

export interface TopicArgs {
    readonly autoDeleteOnIdle?: string;
    readonly defaultMessageTtl?: string;
    readonly duplicateDetectionHistoryTimeWindow?: string;
    readonly enableBatchedOperations?: boolean;
    readonly enableExpress?: boolean;
    readonly enableFilteringMessagesBeforePublishing?: boolean;
    readonly enablePartitioning?: boolean;
    readonly location: string;
    readonly maxSizeInMegabytes?: number;
    readonly _name: string;
    readonly namespaceName: string;
    readonly requiresDuplicateDetection?: boolean;
    readonly resourceGroupName: string;
    readonly supportOrdering?: boolean;
}

