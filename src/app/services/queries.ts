import gql from 'graphql-tag';

export const GET_PAYMENTS = gql`
subscription {
  operations(type: payment) {
    ... on PaymentOperation {
      id
      amount
      dateTime
      asset {
        id
        code
      }
      sourceAccount {
        id
        homeDomain
      }
      destination {
        id
        homeDomain
      }
    }
  }
}
`;

export const GET_ASSET = gql`
query AssetSummary($id: AssetID!) {
  asset(id: $id) {
    code
    holdersCount
    circulatingSupply
    totalSupply
    issuer {
      id
      homeDomain
      reservedBalance
      data {
        name
      }
    }
  }
}
`;
