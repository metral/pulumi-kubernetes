import pulumi
import pulumi.runtime

class StatefulSet(pulumi.CustomResource):
    """
    DEPRECATED - This group version of StatefulSet is deprecated by apps/v1/StatefulSet. See the
    release notes for more information. StatefulSet represents a set of pods with consistent
    identities. Identities are defined as:
     - Network: A single stable DNS and hostname.
     - Storage: As many VolumeClaims as requested.
    The StatefulSet guarantees that a given network identity will always map to the same storage
    identity.
    """
    def __init__(self, __name__, __opts__=None, metadata=None, spec=None, status=None):
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['apiVersion'] = 'apps/v1beta2'
        self.apiVersion = 'apps/v1beta2'

        __props__['kind'] = 'StatefulSet'
        self.kind = 'StatefulSet'

        if metadata and not isinstance(metadata, dict):
            raise TypeError('Expected property aliases to be a dict')
        self.metadata = metadata
        
        __props__['metadata'] = metadata

        if spec and not isinstance(spec, dict):
            raise TypeError('Expected property aliases to be a dict')
        self.spec = spec
        """
        Spec defines the desired identities of pods in this set.
        """
        __props__['spec'] = spec

        if status and not isinstance(status, dict):
            raise TypeError('Expected property aliases to be a dict')
        self.status = status
        """
        Status is the current status of Pods in this StatefulSet. This data may be out of date by
        some window of time.
        """
        __props__['status'] = status

        super(StatefulSet, self).__init__(
            "kubernetes:apps/v1beta2:StatefulSet",
            __name__,
            __props__,
            __opts__)