import { gql } from "@apollo/client";

export const getHindiLocal = gql`
  query {
    language(id: 2) {
      data {
        id
        attributes {
          posts(
            filters: { page: { Page: { contains: "Local" } } }
            sort: ["updatedAt:DESC"]
          ) {
            data {
              id
              attributes {
                Title
                Author
                Date
                Content
                Thumbnail {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getHindiNational = gql`
  query {
    language(id: 2) {
      data {
        id
        attributes {
          posts(
            filters: { page: { Page: { contains: "National" } } }
            sort: ["updatedAt:DESC"]
          ) {
            data {
              id
              attributes {
                Title
                Author
                Date
                Content
                Thumbnail {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getHindiPolitics = gql`
  query {
    language(id: 2) {
      data {
        id
        attributes {
          posts(
            filters: { page: { Page: { contains: "Politics" } } }
            sort: ["updatedAt:DESC"]
          ) {
            data {
              id
              attributes {
                Title
                Author
                Date
                Content
                Thumbnail {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getHindiCrime = gql`
  query {
    language(id: 2) {
      data {
        id
        attributes {
          posts(
            filters: { page: { Page: { contains: "Crime" } } }
            sort: ["updatedAt:DESC"]
          ) {
            data {
              id
              attributes {
                Title
                Author
                Date
                Content
                Thumbnail {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getHindiSnT = gql`
  query {
    language(id: 2) {
      data {
        id
        attributes {
          posts(
            filters: { page: { Page: { contains: "Sports" } } }
            sort: ["updatedAt:DESC"]
          ) {
            data {
              id
              attributes {
                Title
                Author
                Date
                Content
                Thumbnail {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getHindiAll = gql`
  query QE {
    language(id: 2) {
      data {
        id
        attributes {
          local: posts(
            filters: { page: { id: { eq: 1 } } }
            sort: ["updatedAt:DESC"]
          ) {
            data {
              id
              attributes {
                Title
                Author
                Date
                Content
                Thumbnail {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          national: posts(
            filters: { page: { id: { eq: 2 } } }
            sort: ["updatedAt:DESC"]
          ) {
            data {
              id
              attributes {
                Title
                Author
                Date
                Content
                Thumbnail {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          politics: posts(
            filters: { page: { id: { eq: 3 } } }
            sort: ["updatedAt:DESC"]
          ) {
            data {
              id
              attributes {
                Title
                Author
                Date
                Content
                Thumbnail {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          crime: posts(
            filters: { page: { id: { eq: 4 } } }
            sort: ["updatedAt:DESC"]
          ) {
            data {
              id
              attributes {
                Title
                Author
                Date
                Content
                Thumbnail {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          SnT: posts(
            filters: { page: { id: { eq: 5 } } }
            sort: ["updatedAt:DESC"]
          ) {
            data {
              id
              attributes {
                Title
                Author
                Date
                Content
                Thumbnail {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
