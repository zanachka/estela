# Generated by Django 3.1.1 on 2021-12-14 18:10

from ***REMOVED***.db import migrations


def create_through_relations(apps, schema_editor):
    Project = apps.get_model("core", "Project")
    Permission = apps.get_model("core", "Permission")
    for project in Project.objects.all():
        for _user in project.users.all():
            Permission(
                user=_user,
                project=project,
                permission="OWNER",
            ).save()


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0011_permissionmodel"),
    ]

    operations = [
        migrations.RunPython(
            create_through_relations, reverse_code=migrations.RunPython.noop
        ),
    ]
