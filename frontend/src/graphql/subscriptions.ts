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
          userId
          regionId
          createdAt
          updatedAt
          owner
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
          createdAt
          updatedAt
          __typename
        }
        User {
          id
          sub
          type
          bio
          createdAt
          updatedAt
          userReservationId
          owner
          __typename
        }
        createdAt
        updatedAt
        reservationFieldId
        reservationUserId
        __typename
      }
      bio
      createdAt
      updatedAt
      userReservationId
      owner
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
          userId
          regionId
          createdAt
          updatedAt
          owner
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
          createdAt
          updatedAt
          __typename
        }
        User {
          id
          sub
          type
          bio
          createdAt
          updatedAt
          userReservationId
          owner
          __typename
        }
        createdAt
        updatedAt
        reservationFieldId
        reservationUserId
        __typename
      }
      bio
      createdAt
      updatedAt
      userReservationId
      owner
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
          userId
          regionId
          createdAt
          updatedAt
          owner
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
          createdAt
          updatedAt
          __typename
        }
        User {
          id
          sub
          type
          bio
          createdAt
          updatedAt
          userReservationId
          owner
          __typename
        }
        createdAt
        updatedAt
        reservationFieldId
        reservationUserId
        __typename
      }
      bio
      createdAt
      updatedAt
      userReservationId
      owner
      __typename
    }
  }
`;
export const onCreateReservation = /* GraphQL */ `
  subscription OnCreateReservation(
    $filter: ModelSubscriptionReservationFilterInput
  ) {
    onCreateReservation(filter: $filter) {
      id
      dateStart
      dateEnd
      Field {
        id
        name
        address
        regionID
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
          createdAt
          updatedAt
          reservationFieldId
          reservationUserId
          __typename
        }
        bio
        createdAt
        updatedAt
        userReservationId
        owner
        __typename
      }
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
  ) {
    onUpdateReservation(filter: $filter) {
      id
      dateStart
      dateEnd
      Field {
        id
        name
        address
        regionID
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
          createdAt
          updatedAt
          reservationFieldId
          reservationUserId
          __typename
        }
        bio
        createdAt
        updatedAt
        userReservationId
        owner
        __typename
      }
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
  ) {
    onDeleteReservation(filter: $filter) {
      id
      dateStart
      dateEnd
      Field {
        id
        name
        address
        regionID
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
          createdAt
          updatedAt
          reservationFieldId
          reservationUserId
          __typename
        }
        bio
        createdAt
        updatedAt
        userReservationId
        owner
        __typename
      }
      createdAt
      updatedAt
      reservationFieldId
      reservationUserId
      __typename
    }
  }
`;
export const onCreateField = /* GraphQL */ `
  subscription OnCreateField($filter: ModelSubscriptionFieldFilterInput) {
    onCreateField(filter: $filter) {
      id
      name
      address
      regionID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateField = /* GraphQL */ `
  subscription OnUpdateField($filter: ModelSubscriptionFieldFilterInput) {
    onUpdateField(filter: $filter) {
      id
      name
      address
      regionID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteField = /* GraphQL */ `
  subscription OnDeleteField($filter: ModelSubscriptionFieldFilterInput) {
    onDeleteField(filter: $filter) {
      id
      name
      address
      regionID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateRegion = /* GraphQL */ `
  subscription OnCreateRegion($filter: ModelSubscriptionRegionFilterInput) {
    onCreateRegion(filter: $filter) {
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
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      users {
        items {
          id
          userId
          regionId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateRegion = /* GraphQL */ `
  subscription OnUpdateRegion($filter: ModelSubscriptionRegionFilterInput) {
    onUpdateRegion(filter: $filter) {
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
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      users {
        items {
          id
          userId
          regionId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteRegion = /* GraphQL */ `
  subscription OnDeleteRegion($filter: ModelSubscriptionRegionFilterInput) {
    onDeleteRegion(filter: $filter) {
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
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      users {
        items {
          id
          userId
          regionId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateUserRegion = /* GraphQL */ `
  subscription OnCreateUserRegion(
    $filter: ModelSubscriptionUserRegionFilterInput
    $owner: String
  ) {
    onCreateUserRegion(filter: $filter, owner: $owner) {
      id
      userId
      regionId
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
          createdAt
          updatedAt
          reservationFieldId
          reservationUserId
          __typename
        }
        bio
        createdAt
        updatedAt
        userReservationId
        owner
        __typename
      }
      region {
        id
        name
        banner
        bio
        Fields {
          nextToken
          __typename
        }
        users {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateUserRegion = /* GraphQL */ `
  subscription OnUpdateUserRegion(
    $filter: ModelSubscriptionUserRegionFilterInput
    $owner: String
  ) {
    onUpdateUserRegion(filter: $filter, owner: $owner) {
      id
      userId
      regionId
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
          createdAt
          updatedAt
          reservationFieldId
          reservationUserId
          __typename
        }
        bio
        createdAt
        updatedAt
        userReservationId
        owner
        __typename
      }
      region {
        id
        name
        banner
        bio
        Fields {
          nextToken
          __typename
        }
        users {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteUserRegion = /* GraphQL */ `
  subscription OnDeleteUserRegion(
    $filter: ModelSubscriptionUserRegionFilterInput
    $owner: String
  ) {
    onDeleteUserRegion(filter: $filter, owner: $owner) {
      id
      userId
      regionId
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
          createdAt
          updatedAt
          reservationFieldId
          reservationUserId
          __typename
        }
        bio
        createdAt
        updatedAt
        userReservationId
        owner
        __typename
      }
      region {
        id
        name
        banner
        bio
        Fields {
          nextToken
          __typename
        }
        users {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
