export const rules = {
    "Superadministrador": [
        "enterprises:edit",
        "enterprises:delete",
    ],
    "Administrador": [
        "jobs:edit",
        "jobs:delete",
        "workers:edit",
        "workers:delete",
        "activities:edit",
        "activities:delete",
        "trainings:edit",
        "trainings:delete",
        "programs:edit",
        "programs:delete",
        "actions:edit",
        "actions:delete",
    ],
    "Jefe Area": [
        "trainings:edit",
        "trainings:delete",
        "programs:edit",
        "programs:delete",
        "actions:edit",
        "actions:delete",
    ]
}