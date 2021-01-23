initSidebarItems({"enum":[["ReadIngressClassResponse","Use `<ReadIngressClassResponse as Response>::try_from_parts` to parse the HTTP response body of [`IngressClass::read_ingress_class`]"],["ReadNamespacedIngressResponse","Use `<ReadNamespacedIngressResponse as Response>::try_from_parts` to parse the HTTP response body of [`Ingress::read_namespaced_ingress`]"],["ReadNamespacedIngressStatusResponse","Use `<ReadNamespacedIngressStatusResponse as Response>::try_from_parts` to parse the HTTP response body of [`Ingress::read_namespaced_ingress_status`]"],["ReadNamespacedNetworkPolicyResponse","Use `<ReadNamespacedNetworkPolicyResponse as Response>::try_from_parts` to parse the HTTP response body of [`NetworkPolicy::read_namespaced_network_policy`]"]],"struct":[["HTTPIngressPath","HTTPIngressPath associates a path with a backend. Incoming urls matching the path are forwarded to the backend."],["HTTPIngressRuleValue","HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'."],["IPBlock","IPBlock describes a particular CIDR (Ex. \"192.168.1.1/24\",\"2001:db9::/64\") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule."],["Ingress","Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc."],["IngressBackend","IngressBackend describes all endpoints for a given service and port."],["IngressClass","IngressClass represents the class of the Ingress, referenced by the Ingress Spec. The `ingressclass.kubernetes.io/is-default-class` annotation can be used to indicate that an IngressClass should be considered default. When a single IngressClass resource has this annotation set to true, new Ingress resources without a class specified will be assigned this default class."],["IngressClassSpec","IngressClassSpec provides information about the class of an Ingress."],["IngressRule","IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue."],["IngressServiceBackend","IngressServiceBackend references a Kubernetes Service as a Backend."],["IngressSpec","IngressSpec describes the Ingress the user wishes to exist."],["IngressStatus","IngressStatus describe the current state of the Ingress."],["IngressTLS","IngressTLS describes the transport layer security associated with an Ingress."],["NetworkPolicy","NetworkPolicy describes what network traffic is allowed for a set of Pods"],["NetworkPolicyEgressRule","NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8"],["NetworkPolicyIngressRule","NetworkPolicyIngressRule describes a particular set of traffic that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and from."],["NetworkPolicyPeer","NetworkPolicyPeer describes a peer to allow traffic to/from. Only certain combinations of fields are allowed"],["NetworkPolicyPort","NetworkPolicyPort describes a port to allow traffic on"],["NetworkPolicySpec","NetworkPolicySpec provides the specification of a NetworkPolicy"],["ReadIngressClassOptional","Optional parameters of [`IngressClass::read_ingress_class`]"],["ReadNamespacedIngressOptional","Optional parameters of [`Ingress::read_namespaced_ingress`]"],["ReadNamespacedIngressStatusOptional","Optional parameters of [`Ingress::read_namespaced_ingress_status`]"],["ReadNamespacedNetworkPolicyOptional","Optional parameters of [`NetworkPolicy::read_namespaced_network_policy`]"],["ServiceBackendPort","ServiceBackendPort is the service port being referenced."]]});