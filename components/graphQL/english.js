import { gql } from "@apollo/client";

export const getEnglishLocal = gql`
  query {
    language(id: 1) {
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

export const getEnglishNational = gql`
  query {
    language(id: 1) {
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
                id
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

export const getEnglishPolitics = gql`
  query {
    language(id: 1) {
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
                id
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

export const getEnglishCrime = gql`
  query {
    language(id: 1) {
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

export const getEnglishSnT = gql`
  query {
    language(id: 1) {
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

export const getEnglishAll = gql`
  query QE {
    language(id: 1) {
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
