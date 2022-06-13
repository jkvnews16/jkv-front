import { gql } from "@apollo/client";

export const getCrimeEnglish = gql`
  query {
    page(id: 4) {
      data {
        id
        attributes {
          Page
          posts(filters: { language: { Language: { contains: "English" } } }) {
            data {
              id
              attributes {
                Thumbnail {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                Title
                Author
                Date
                Content
              }
            }
          }
        }
      }
    }
  }
`;

export const getCrimeHindi = gql`
  query {
    page(id: 4) {
      data {
        id
        attributes {
          Page
          posts(filters: { language: { Language: { contains: "Hindi" } } }) {
            data {
              id
              attributes {
                Thumbnail {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                Title
                Author
                Date
                Content
              }
            }
          }
        }
      }
    }
  }
`;

export const getCrimeMarathi = gql`
  query {
    page(id: 4) {
      data {
        id
        attributes {
          Page
          posts(filters: { language: { Language: { contains: "Marathi" } } }) {
            data {
              id
              attributes {
                Thumbnail {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                Title
                Author
                Date
                Content
              }
            }
          }
        }
      }
    }
  }
`;
