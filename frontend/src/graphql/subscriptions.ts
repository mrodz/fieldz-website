/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
      id
      sub
      type
      Regions {
        items {
          id
          name
          banner
          bio
          owner
          createdAt
          updatedAt
          userRegionsId
          __typename
        }
        nextToken
        __typename
      }
      Reservation {
        id
        dateStart
        dateEnd
        Field {
          id
          name
          address
          regionID
          owner
          createdAt
          updatedAt
          __typename
        }
        User {
          id
          sub
          type
          bio
          owner
          createdAt
          updatedAt
          userReservationId
          __typename
        }
        owner
        createdAt
        updatedAt
        reservationFieldId
        reservationUserId
        __typename
      }
      bio
      owner
      createdAt
      updatedAt
      userReservationId
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
      id
      sub
      type
      Regions {
        items {
          id
          name
          banner
          bio
          owner
          createdAt
          updatedAt
          userRegionsId
          __typename
        }
        nextToken
        __typename
      }
      Reservation {
        id
        dateStart
        dateEnd
        Field {
          id
          name
          address
          regionID
          owner
          createdAt
          updatedAt
          __typename
        }
        User {
          id
          sub
          type
          bio
          owner
          createdAt
          updatedAt
          userReservationId
          __typename
        }
        owner
        createdAt
        updatedAt
        reservationFieldId
        reservationUserId
        __typename
      }
      bio
      owner
      createdAt
      updatedAt
      userReservationId
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
      id
      sub
      type
      Regions {
        items {
          id
          name
          banner
          bio
          owner
          createdAt
          updatedAt
          userRegionsId
          __typename
        }
        nextToken
        __typename
      }
      Reservation {
        id
        dateStart
        dateEnd
        Field {
          id
          name
          address
          regionID
          owner
          createdAt
          updatedAt
          __typename
        }
        User {
          id
          sub
          type
          bio
          owner
          createdAt
          updatedAt
          userReservationId
          __typename
        }
        owner
        createdAt
        updatedAt
        reservationFieldId
        reservationUserId
        __typename
      }
      bio
      owner
      createdAt
      updatedAt
      userReservationId
      __typename
    }
  }
`;
export const onCreateReservation = /* GraphQL */ `
  subscription OnCreateReservation(
    $filter: ModelSubscriptionReservationFilterInput
    $owner: String
  ) {
    onCreateReservation(filter: $filter, owner: $owner) {
      id
      dateStart
      dateEnd
      Field {
        id
        name
        address
        regionID
        owner
        createdAt
        updatedAt
        __typename
      }
      User {
        id
        sub
        type
        Regions {
          nextToken
          __typename
        }
        Reservation {
          id
          dateStart
          dateEnd
          owner
          createdAt
          updatedAt
          reservationFieldId
          reservationUserId
          __typename
        }
        bio
        owner
        createdAt
        updatedAt
        userReservationId
        __typename
      }
      owner
      createdAt
      updatedAt
      reservationFieldId
      reservationUserId
      __typename
    }
  }
`;
export const onUpdateReservation = /* GraphQL */ `
  subscription OnUpdateReservation(
    $filter: ModelSubscriptionReservationFilterInput
    $owner: String
  ) {
    onUpdateReservation(filter: $filter, owner: $owner) {
      id
      dateStart
      dateEnd
      Field {
        id
        name
        address
        regionID
        owner
        createdAt
        updatedAt
        __typename
      }
      User {
        id
        sub
        type
        Regions {
          nextToken
          __typename
        }
        Reservation {
          id
          dateStart
          dateEnd
          owner
          createdAt
          updatedAt
          reservationFieldId
          reservationUserId
          __typename
        }
        bio
        owner
        createdAt
        updatedAt
        userReservationId
        __typename
      }
      owner
      createdAt
      updatedAt
      reservationFieldId
      reservationUserId
      __typename
    }
  }
`;
export const onDeleteReservation = /* GraphQL */ `
  subscription OnDeleteReservation(
    $filter: ModelSubscriptionReservationFilterInput
    $owner: String
  ) {
    onDeleteReservation(filter: $filter, owner: $owner) {
      id
      dateStart
      dateEnd
      Field {
        id
        name
        address
        regionID
        owner
        createdAt
        updatedAt
        __typename
      }
      User {
        id
        sub
        type
        Regions {
          nextToken
          __typename
        }
        Reservation {
          id
          dateStart
          dateEnd
          owner
          createdAt
          updatedAt
          reservationFieldId
          reservationUserId
          __typename
        }
        bio
        owner
        createdAt
        updatedAt
        userReservationId
        __typename
      }
      owner
      createdAt
      updatedAt
      reservationFieldId
      reservationUserId
      __typename
    }
  }
`;
export const onCreateField = /* GraphQL */ `
  subscription OnCreateField(
    $filter: ModelSubscriptionFieldFilterInput
    $owner: String
  ) {
    onCreateField(filter: $filter, owner: $owner) {
      id
      name
      address
      regionID
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateField = /* GraphQL */ `
  subscription OnUpdateField(
    $filter: ModelSubscriptionFieldFilterInput
    $owner: String
  ) {
    onUpdateField(filter: $filter, owner: $owner) {
      id
      name
      address
      regionID
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteField = /* GraphQL */ `
  subscription OnDeleteField(
    $filter: ModelSubscriptionFieldFilterInput
    $owner: String
  ) {
    onDeleteField(filter: $filter, owner: $owner) {
      id
      name
      address
      regionID
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateRegion = /* GraphQL */ `
  subscription OnCreateRegion(
    $filter: ModelSubscriptionRegionFilterInput
    $owner: String
  ) {
    onCreateRegion(filter: $filter, owner: $owner) {
      id
      name
      banner
      bio
      Fields {
        items {
          id
          name
          address
          regionID
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      user {
        id
        sub
        type
        Regions {
          nextToken
          __typename
        }
        Reservation {
          id
          dateStart
          dateEnd
          owner
          createdAt
          updatedAt
          reservationFieldId
          reservationUserId
          __typename
        }
        bio
        owner
        createdAt
        updatedAt
        userReservationId
        __typename
      }
      owner
      createdAt
      updatedAt
      userRegionsId
      __typename
    }
  }
`;
export const onUpdateRegion = /* GraphQL */ `
  subscription OnUpdateRegion(
    $filter: ModelSubscriptionRegionFilterInput
    $owner: String
  ) {
    onUpdateRegion(filter: $filter, owner: $owner) {
      id
      name
      banner
      bio
      Fields {
        items {
          id
          name
          address
          regionID
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      user {
        id
        sub
        type
        Regions {
          nextToken
          __typename
        }
        Reservation {
          id
          dateStart
          dateEnd
          owner
          createdAt
          updatedAt
          reservationFieldId
          reservationUserId
          __typename
        }
        bio
        owner
        createdAt
        updatedAt
        userReservationId
        __typename
      }
      owner
      createdAt
      updatedAt
      userRegionsId
      __typename
    }
  }
`;
export const onDeleteRegion = /* GraphQL */ `
  subscription OnDeleteRegion(
    $filter: ModelSubscriptionRegionFilterInput
    $owner: String
  ) {
    onDeleteRegion(filter: $filter, owner: $owner) {
      id
      name
      banner
      bio
      Fields {
        items {
          id
          name
          address
          regionID
          owner
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      user {
        id
        sub
        type
        Regions {
          nextToken
          __typename
        }
        Reservation {
          id
          dateStart
          dateEnd
          owner
          createdAt
          updatedAt
          reservationFieldId
          reservationUserId
          __typename
        }
        bio
        owner
        createdAt
        updatedAt
        userReservationId
        __typename
      }
      owner
      createdAt
      updatedAt
      userRegionsId
      __typename
    }
  }
`;
