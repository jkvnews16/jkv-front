import { gql } from "@apollo/client";

export const getNationalEnglish = gql`
  query {
    page(id: 2) {
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

export const getNationalHindi = gql`
  query {
    page(id: 2) {
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

export const getNationalMarathi = gql`
  query {
    page(id: 2) {
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
