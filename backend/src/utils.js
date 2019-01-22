function hasPermission(user, permissionsNeeded) {

  const matchedPermissions = user.permissions.filter(permissionTheyHave =>
    permissionsNeeded.includes(permissionTheyHave)
  );

  console.log('matchedPermissions.length ' + matchedPermissions.length);

  if (!matchedPermissions.length) {
    return false;
    
    // throw new Error(`You do not have sufficient permissions

    //   : ${permissionsNeeded}

    //   You Have:

    //   ${user.permissions}
    //   `);
  }
  return true;
}
exports.hasPermission = hasPermission;
